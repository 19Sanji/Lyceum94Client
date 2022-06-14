import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer row">
      <div className="footer_info col-10">
        <table>
          <tr>
            <td>
              <h5>Контакты</h5>
            </td>
            <td>
              <h5>Адрес</h5>
            </td>
            <td>
              <h5>Ссылки</h5>
            </td>
          </tr>
          <tbody>
            <td>+7 987 044-57-87</td>

            <td>Республика Башкортостан, г.Уфа, ул.Губайдуллина д.27</td>
            <td>
              <a href="https://issledovatel.pro/">
                Межрегиональное общественное Движение творческих педагогов
                «Исследователь»
              </a>
            </td>
          </tbody>
        </table>
        <div className="footer_text">
          <span>
            Башкирское региональное отделение Общероссийского общественного
            движения творческих педагогов «Исследователь» © 2022
          </span>
        </div>
      </div>
    </div>
  );
}
export default Footer;
