'use client';

import './showcase.css';
import { REQUEST } from './content';
import { PlayGlyph, TipGlyph } from './glyphs';
import { BUTTON, cx, facet, listOf, named, vars, type SceneProps } from './scene';
import { useRun } from './useRun';

const FACET = facet('fullstack');
const { clients, api, services } = REQUEST;

// One request, hop by hop. The hop index is the only timing input: CSS turns
// it into a delay, so the order below is the order on screen.
//   hop 0             the first client calls the API
//   hops 1..n         the API calls each service in turn
//   hop n + 1         the API answers the client
const CALL = 0;
const serviceHop = (k: number) => k + 1;
const ANSWER = services.length + 1;
// A node lights up when the dot arrives, one step after its hop starts.
const arrival = (hop: number) => hop + 1;
// The API stays lit from the request's arrival until it starts to answer.
const API_HOLD = ANSWER - arrival(CALL) + 0.5;
// Whole run, in steps: every hop, then the client's last flash.
const STEPS = arrival(ANSWER) + 1.5;
// The longest column decides the height of every outer node.
const SLOTS = Math.max(clients.length, services.length);

const DIAGRAM_LABEL = `${FACET.title}. ${listOf(clients.map(named))} call the ${named(
  api
)}, which talks to ${listOf(services.map(named))}.`;

type Hop = { i: number; back?: boolean };

function Wire({ hops }: { hops: Hop[] }) {
  return (
    <span className="shw-wire">
      <span className="shw-wire-line" />
      <TipGlyph className="shw-wire-tip" />
      {hops.map((hop) => (
        <span key={hop.i} className="shw-wire-path" style={vars({ '--i': hop.i })}>
          <span className={cx('shw-trail', hop.back && 'shw-trail-back')} />
          <span className={cx('shw-hop', hop.back ? 'shw-hop-back' : 'shw-hop-go')}>
            <span className="shw-dot" />
          </span>
        </span>
      ))}
    </span>
  );
}

function Node({
  name,
  detail,
  lit,
}: {
  name: string;
  detail: string;
  /** Steps at which this node's edge turns brand. */
  lit: number[];
}) {
  return (
    <span className="shw-req-slot">
      <span className="shw-node">
        <span className="shw-node-text">
          <span className="shw-node-name">{name}</span>
          <span className="shw-node-detail">{detail}</span>
        </span>
        {lit.map((i) => (
          <span key={i} className="shw-ring" style={vars({ '--i': i })} />
        ))}
      </span>
    </span>
  );
}

/**
 * Full-stack facet: one request, end to end. Clients on the left, the API in
 * the middle, its services on the right. "Send request" plays one request
 * through the diagram and ends where it started.
 */
export function RequestScene({ className, controls = true, caption = true }: SceneProps) {
  const { ref, status, run, onAnimationEnd } = useRun<HTMLElement>('Request answered');

  return (
    <figure
      ref={ref}
      className={cx('shw shw-scene shw-request', className)}
      style={vars({ '--shw-steps': STEPS })}
      onAnimationEnd={onAnimationEnd}
    >
      <div className="shw-stage">
        <div
          role="img"
          aria-label={DIAGRAM_LABEL}
          className="shw-req"
          style={vars({ '--shw-slots': SLOTS })}
        >
          <span className="shw-req-col">
            {clients.map((client, k) => (
              <Node
                key={client.name}
                name={client.name}
                detail={client.detail}
                lit={k === 0 ? [CALL, arrival(ANSWER)] : []}
              />
            ))}
          </span>

          <span className="shw-req-col">
            {clients.map((client, k) => (
              <Wire
                key={client.name}
                hops={k === 0 ? [{ i: CALL }, { i: ANSWER, back: true }] : []}
              />
            ))}
          </span>

          <span className="shw-node shw-node-api">
            <span className="shw-node-text">
              <span className="shw-node-name">{api.name}</span>
              <span className="shw-node-detail">{api.detail}</span>
            </span>
            <span
              className="shw-ring shw-ring-hold"
              style={vars({ '--i': arrival(CALL), '--shw-hold': API_HOLD })}
            />
          </span>

          <span className="shw-req-col">
            {services.map((service, k) => (
              <Wire key={service.name} hops={[{ i: serviceHop(k) }]} />
            ))}
          </span>

          <span className="shw-req-col">
            {services.map((service, k) => (
              <Node
                key={service.name}
                name={service.name}
                detail={service.detail}
                lit={[arrival(serviceHop(k))]}
              />
            ))}
          </span>
        </div>
      </div>

      {controls && (
        <div className="shw-controls">
          <button type="button" className={cx(BUTTON, 'shw-run')} onClick={run}>
            <PlayGlyph className="h-3 w-3" />
            Send request
          </button>
          <span role="status" className="sr-only">
            {status}
          </span>
        </div>
      )}

      {caption && <figcaption className="shw-caption">{FACET.caption}</figcaption>}
    </figure>
  );
}
