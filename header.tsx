import Image from "next/image"
export default function Header(){
    return(
        <div>
            <div className="first">
                <div className="pic">
                    <img src="/icon.png" />
                    
                        <ul className="second">
                        <li className="title">MAIN</li>
                            <li>GALLERY</li>
                            <li>PROJECTS</li>
                            <li>CERTIFICATIONS</li>
                            <li>CONTACTS</li>
                        </ul>
                </div>
            </div>
        </div>
    )

}