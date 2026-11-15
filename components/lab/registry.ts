// Design lab registry: the homepage concepts that can be previewed under
// /lab/<id>, each with the palette it was designed for. Local only; the lab
// is not served in production (see app/lab/layout.tsx).
export type Concept = {
  id: string;
  name: string;
  blurb: string;
  palette: string;
};

export const CONCEPTS: Concept[] = [
  {
    id: 'current',
    name: 'Current',
    blurb: 'The homepage as it is today, for comparison.',
    palette: 'lapis',
  },
];
