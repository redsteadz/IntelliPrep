import { Component } from "react";
import "./NavbarStyles.css";


function LogIn(){
    alert("Clicked Log In");
    }

function SignIn(){
    alert("Clicked Sign In");
    }



class Navbar extends Component {
    
    state={clicked:false};
    handleClick=()=>{
        this.setState({
            clicked: 
                !this.state.clicked})
    }

    render(){
        return(
            <>
                <nav>
                    <a href="index.html">
                        <img src="https://github.com/Noman-Ahmed-Khan/Hosted-images/blob/main/IntelliPrep%20Logo(2).png?raw=true"  alt="INTELLIPREP LOGO"/>
                    </a>
                    <div>
                        <ul id="buttons" className={this.state.clicked ? "#buttons active":"#buttons"}> 
                            <li onClick={SignIn}><a href="index.html" >SIGN IN</a></li>
                            {/* <li><a href="index.html" class="dash">|</a></li> */}
                            <li onClick={LogIn}><a href="index.html" >LOG IN</a></li>

                        </ul>
                    </div>
                    <div id="toggle" onClick={this.handleClick}>
                        <i className={this.state.clicked? "fas fa-times":"fas fa-bars"}></i>
                    </div>
                </nav>
            </>
        );
    }
}
export default Navbar;
