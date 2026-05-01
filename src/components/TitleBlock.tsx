import React from 'react';

interface TitleBlockProps {
  headline: string;
  authors: string;
  journal: string;
  doi: string;
  pmcid?: string;
  pmid?: string;
}

export const TitleBlock: React.FC<TitleBlockProps> = ({
  headline,
  authors,
  journal,
  doi,
  pmcid,
  pmid
}) => {
  return (
    <div className="title-block flex flex-col gap-2">
      <h1 className="text-4xl font-semibold leading-tight text-white mb-2 max-w-3xl">
        {headline}
      </h1>
      <p className="text-sm text-[var(--levl-text-secondary)]">
        {authors}
      </p>
      <p className="text-sm italic text-[var(--levl-text-muted)] mt-1">
        {journal} | doi: {doi}
      </p>
      <div className="text-xs text-[var(--levl-text-muted)] mt-1">
        {pmcid && <span className="mr-4">PMCID: {pmcid}</span>}
        {pmid && <span>PMID: {pmid}</span>}
      </div>
    </div>
  );
};
