// The showcase library: four interactive scenes, one per facet of the work,
// plus the small pieces that go with them. All facts come from ./content.
//
// PLACING A SCENE
//   <div className="h-[380px] rounded-[14px] bg-surface p-6"><MorphScene /></div>
// - A scene is a <figure> that takes the width of its box and, when the box
//   has a height, that height too. With no height it has a natural one.
//   className is for placement only (size, margin, grid cell); the defaults it
//   overrides are width and height 100%. In a flex column with siblings pass
//   "h-auto min-h-0 flex-1".
// - It adapts to its own box, not the viewport: FULL from 520px wide, COMPACT
//   below, down to 240px. The diagram also answers to its height (fewer
//   labels when short, more when tall).
// - Shortest box that still works, FULL with controls and caption: 160px
//   (morph), 176px (request), 164px (pipeline), 168px (schedule). COMPACT
//   with the caption and no controls: 160px.
// - It is transparent and may sit on page or on surface. Give it at least
//   16px of padding and do not clip it: scattered tiles and the brand ring of
//   an active node are drawn a few pixels outside the diagram.
// - It rests in a finished state and moves only from the visitor's hand. To
//   start a run from outside (a tile that is itself a button, a guided tour)
//   set the attribute data-run on the figure; the scene removes it at the end.
// - The scenes print the facet's caption only. Names, titles and facts are
//   the layout's to print, from FACETS.
import type { ComponentType } from 'react';
import type { FacetId } from './content';
import { MorphScene } from './MorphScene';
import { PipelineScene } from './PipelineScene';
import { RequestScene } from './RequestScene';
import { ScheduleScene } from './ScheduleScene';
import type { SceneProps } from './scene';

export { MorphScene, RequestScene, PipelineScene, ScheduleScene };
export { ResultPair } from './ResultPair';
export { LoadRace } from './LoadRace';
export { CopyEmail } from './CopyEmail';
export { CairoClock } from './CairoClock';
export type { SceneProps };

/** The scene for each facet in content.ts, for layouts that map over FACETS. */
export const SCENE_BY_FACET: Record<FacetId, ComponentType<SceneProps>> = {
  frontend: MorphScene,
  fullstack: RequestScene,
  delivery: PipelineScene,
  automation: ScheduleScene,
};
