import styled from "styled-components";

const FooterArea = styled.div`
  display: flex;
  justify-content: space-evenly;

  background-color: #232227;

  color: rgb(174, 98, 174);
  font-weight: 600;
  font-size: 1.6ch;

  margin-bottom: 5px;
  padding-top: 30px;
  padding-bottom: 50px;
`

const FooterContentArea = styled.div`
  /* display: flex;
  flex-direction: column; */
`

const FooterItemArea = styled.div`
  display: flex;
  flex-direction: column;

  > button{
    color: white;
    text-align: left;
    font-weight: 400;

    margin-top: 10px;
    margin-left: 0;
    padding-left: 0;

    border: 0px;
    background-color: transparent;
  }
`

function Footer(){
  return(
    <FooterArea>
      <FooterContentArea>
        ABOUT
        <FooterItemArea>
          <button>Contact</button>
          <button>Brand</button>
          <button>Community</button>
          <button>Litepaper</button>       
        </FooterItemArea>
      </FooterContentArea>
      <FooterContentArea>
        HELP
        <FooterItemArea>
          <button>Customer Support</button>
          <button>Troubleshooting</button>
          <button>Guides</button>  
        </FooterItemArea>
      </FooterContentArea>
      <FooterContentArea>
        DEVELOPERS
        <FooterItemArea>
          <button>Github</button>
          <button>Documentation</button>
          <button>Bug Bounty</button>  
          <button>Audits</button>  
          <button>Careers</button>  
        </FooterItemArea>
      </FooterContentArea>
      <div >
        <img className="footerLogo" src={'/Logo.png'}></img>
      </div>
    </FooterArea>
  )
}

export default Footer;