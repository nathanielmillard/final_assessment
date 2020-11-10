import React from 'react';
import './UrlContainer.css';
import icon from '../../x.svg'
const UrlContainer = (props) => {
  const urlEls = props.urls.map((url, index) => {
    return (
      <div className="url" key={index}>
        <h3>{url.title}</h3>
        <a href={url.short_url} target="blank">{url.short_url}</a>
        <p>{url.long_url}</p>
        <button onClick={props.deleteUrl} id={url.id} ><img src={icon} alt='Delete' id={url.id}/></button>
      </div>
    )
  });

  return (
    <section>
      { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
    </section>
  )
}

export default UrlContainer;
