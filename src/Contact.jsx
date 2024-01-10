import React from "react";
import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    .container {
      margin-top: 6rem;
      text-align: center;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  const Title = styled.h2`
    margin-top: 10px;
    margin-bottom: 10px;
  `;

  const Line = styled.div`
    width: 50px;
    height: 4px;
    background-color: rgb(98, 84, 243);
    margin: 0 auto 15px;
    border-radius: 30%;
  `;

  const Description = styled.p`
    text-align: center;
  `;
  return (
    <>
      <Title>CONNECT WITH ME</Title>
      <Line />
      <Description>
        Feel free to Contact me by submitting the form below
      </Description>
      <Wrapper>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27564.951653618984!2d77.97164664571928!3d30.27643633764552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092bbf91f250b7%3A0xe581e719079a8ec8!2sSubhash%20Nagar%2C%20Dehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1704914149986!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{border:0}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="container">
          <div className="contact-form">
            <form
              action="https://formspree.io/f/mpzenqjy"
              method="POST"
              className="contact-inputs"
            >
              <input
                type="text"
                name="username"
                placeholder="username"
                autoComplete="off"
                required
              />
              <input
                type="email"
                name="Email"
                placeholder="Email"
                autoComplete="off"
                required
              />
              <textarea
                name="meessage"
                cols="30"
                rows="10"
                placeholder="Enter Message"
                autoComplete="off"
                required
              ></textarea>
              <input type="submit" value="send" />
            </form>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Contact;
