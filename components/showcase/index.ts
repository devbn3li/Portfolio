// The showcase library: four interactive scenes, one per facet of the work,
// plus the small pieces that go with them. All facts come from ./content.
//
// Scenes share one contract (see SceneProps): a <figure> that fills its
// parent, adapts by container queries (FULL from 520px wide, COMPACT below,
// down to 240px), rests in a finished, labelled state and animates only from
// the visitor's hand.
export { MorphScene } from './MorphScene';
export { RequestScene } from './RequestScene';
export { PipelineScene } from './PipelineScene';
export { ScheduleScene } from './ScheduleScene';
export { ResultPair } from './ResultPair';
export { LoadRace } from './LoadRace';
export { CopyEmail } from './CopyEmail';
export { CairoClock } from './CairoClock';
export type { SceneProps } from './scene';
