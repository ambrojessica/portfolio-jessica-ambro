import React from "react";

const Contact = () => {
  return (
    <div>
      <h3>Contact Me:</h3>
      <p>Questions, Comments, Concerns, Services? Send me a message.</p>
      <section>
        <div>
          <label> Name
            <input
              type="name"
              name="name"
            />
          </label>
          <label> Email
            <input
              type="email"
              name="email"
            />
          </label>
          <label> Message
            <input
              type="text"
              name="message"
            />
          </label>
          <button>Submit</button>
        </div>
      </section>

      <section>
        <a href="https://github.com/ambrojessica">Github</a>
        <a href="https://www.linkedin.com/in/ambrojessica/">Linkedin</a>
        <a href="https://twitter.com/ambrojessica">Twitter</a>
        <a href="mailto:ambrojessica0@gmail.com">Email</a>
      </section>
    </div>
  );
};

export default Contact;