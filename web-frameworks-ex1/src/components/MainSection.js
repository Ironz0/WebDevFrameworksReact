import React from 'react'
import styles from './MainSection.module.css'
import pic from './ministry.jpg'

console.log(pic);

export default function MainSection () {
    return (
        <div className={ styles.newssection }>
            <div className={ styles.container }>
                    <div className={ styles.header }>Koronavirus</div>
                    <img src= {pic} width="650" height="400" />  
                    <div className={ styles.HSseuraa }>HS Seuraa</div>
                    <div className={ styles.header2 }>Päivitetty seuranta | STM: Parasetamolia tai deksametasonia sisältävien lääkkeiden myyntiä rajoitetaan</div>
                    <div className={ styles.header3 }>Koronaviruksen vaikutukset Suomessa</div>
                    <table>
                    <tr>
                        <td>Tartunnat <br></br> yhteensä</td>
                        <td>Tuoreimmat <br></br> 14 päivää</td>
                        <td>Edeltävät <br></br> 14 päivää</td>
                    </tr>
                    <tr>
                        <td className={ styles.number2 }>7776</td>
                        <td className={ styles.number }><icon className={ styles.tri }>🔺</icon>293</td>
                        <td className={ styles.number }>132</td>
                    </tr>
                    <tr>
                        <td>Kuolleet</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={ styles.number2 }>334</td>
                        <td className={ styles.number }><icon className={ styles.tri }>🔺</icon>5</td>
                        <td className={ styles.number }>1</td>
                    </tr>
                    </table>
            </div>
                        <div className={ styles.container2 }>
                        <div className={ styles.header }>Luetuimmat</div>
                            <div className={ styles.side }>
                                <div className={ styles.articles }>
                                    <h1>1</h1>
                                    <p><b>Rikosepäilyt</b> | EIT-huijaus: Kuolleeksi väitetyn irakilaismiehen tytär valehteli perheen taustoista jo turvapaikkahakemuksessa</p>
                                </div>
                                <div className={ styles.articles }>
                                    <h1>2</h1>
                                    <p><b>HS Vantaa</b> | Vantaalle nousi vankilan näköinen päiväkoti jota pilkataan nyt surutta verkossa</p>
                                </div>
                                <div className={ styles.articles }>
                                    <h1>3</h1>
                                    <p><b>Päivitetty seuranta</b> | STM: Parasetamolia tai deksametasoniasisältävien lääkkeiden myyntiä rajoitetaan - Ministeriö haluaa varmistaa valmisteiden riittävyyden</p>
                                </div>
                                <div className={ styles.articles }>
                                    <h1>4</h1>
                                    <p><b>Nyt.fi</b> | Harry Styles puki ylleen suomalaisen suunnittelijan neuleen, nyt tätä "mummon tilkkutäkkiä" neulovat kummenet tuhannet ympäri maailman - Soitimme vaatesuunnittelijalle</p>
                                </div>
                                <div className={ styles.articles }>
                                    <h1>5</h1>
                                    <p><b>Rikosepäilyt</b> | Atte Jääskeläinen sai syytteet liikenneturvallisuuden vaarantamisesta ja vammantuottamuksesta - "Olen myöntänyt syyllisyyteni".</p>
                                </div>
                                <div className={ styles.articles }>
                                    <h1>6</h1>
                                    <p><b>Helsinki</b> | Työryhmän ehdotus jolki: Jättimäisestä hiilivoimasta halutaan täysin uudenlainen tapahtumapaikka kaupungin asukkaille</p>
                                </div>
                            </div>
                    </div>
        </div>
    )
}