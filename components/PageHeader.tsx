interface PageHeaderProps {
  title: string;
  description: string;
  accent?: string;
}

const PageHeader = ({ title, description, accent = '.' }: PageHeaderProps) => {
  return (
    <div className="mb-12">
      <h1 className="text-4xl font-black text-white md:text-5xl">
        {title}
        <span className="text-7xl font-black text-brand">{accent}</span>
      </h1>
      <p className="mt-4 text-lg text-white/70">{description}</p>
    </div>
  );
};

export default PageHeader;
