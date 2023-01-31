import React from 'react';

import './EmptyView.scss';


const styles = {
    bold : {
        "margin": "35%",
        "fontSize": "1.8em",
        "fontWeight": "600"
    }
}

const EmptyView = ({message='No Results', styleKey}) => {
  return (
    <div className="emptyView" style={styles[styleKey]}>{message}</div>
  )
}

export default EmptyView;