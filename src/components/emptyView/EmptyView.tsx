import React from 'react';

import './EmptyView.scss';

const styles: {[key: string]: { margin: string; fontSize: string; fontWeight: string; }} = {
  bold: {
    margin: "10px",
    fontSize: "20px",
    fontWeight: "bold"
  }
};

type EmptyViewProps = {
  message: string;
  styleKey?: string;
};

const EmptyView = ({message='No Results', styleKey}: EmptyViewProps) => {
  return (
    <div className="emptyView" style={styleKey ? styles[styleKey]: {}}>{message}</div>
  )
}

export default EmptyView;