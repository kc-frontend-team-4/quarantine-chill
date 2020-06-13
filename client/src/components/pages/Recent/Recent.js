import React, { useState } from 'react';
import './Recent.css';

function WriteArticle(props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  function onChangeContent(ev) {
    setContent(ev.target.value);
  }

  function onChangeTitle(ev) {
    setTitle(ev.target.value);
  }

  function submit() {
    const formData = {
      title: title,
      text: content,
    };
    // Can also be written:
    // const formData = {title, text: content};

    fetch('/api/mongodb/blogposts/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Got this back', data);

        // Redirect to blog
        props.history.push('/blog/');
      });
  }

  return (
    <div className="WriteArticle">
      <p>Placeholder Recent</p>
      <br />
    </div>
  );
}

export default WriteArticle;
