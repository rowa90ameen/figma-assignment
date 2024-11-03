export default function Footer(){
    return(
        <div>
            <div className="footer-background">
                <div className="logo">
                    <img src="/icon.png"  />
                </div>
                <ul className="first-row">
                   <b> <li>Информация</li></b>
                    <li>Главная</li>
                    <li>Проекты</li>
                    <li>Сертификаты</li>
                    <li>Контакты</li>
                </ul>

                <ul className="second-row">
                    <b><li>Контакты</li></b>
                    <li><img src="/Vector.png" />100000, Республика  Казахстан, 
                    г. Караганvда, ул. Телевизионная 10</li>
                    <li><img src="/Group.png" />+7 (701) 77 76 811</li>
                    <li><img src="/Email.png" />Galym.sultanov@mail.ru</li>
                </ul>

                <ul className="third-row">
                    <b><li>Социальные сети</li></b>
                    <li className="icons"><img src="/facebook.png"  />
                    <img src="/twitter.png" alt="" />
                    <img src="/Linked In.png"  />
                    <img src="/pininterest.png" /></li>
                </ul>

            </div>
        </div>
    )
}