import React from 'react';
import { RenderLeafProps } from "slate-react";

export const RenderLeaf = (props: RenderLeafProps) => {
  const { attributes, children, leaf } = props;

  if (leaf.emph) {
    return (
      <em
        {...attributes}
      >
        {children}
      </em>
    )
  } else if (leaf.strong) {
    return (
      <strong
        {...attributes}
      >
        {children}
      </strong>

    )
  }

  return (
    <span
      {...attributes}
    >
      {children}
    </span>
  )
}