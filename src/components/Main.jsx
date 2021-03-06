import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import Slider from "./Slider";
import "../styles/Main.css";

function Main() {
  return (
    <div className="main_content row">
      <div className="mySlider col-12">
        <Slider  />
      </div>

      <div className="main_text col-10">
        <div className="div1">
          <span className="myH">
            Межрегиональное общественное Движение творческих педагогов
            «Исследователь»
          </span>{" "}
          - общественная организация без индивидуального членства, объединяющая
          учителей и педагогов, реализующих разнообразные программы и проекты,
          связанные с исследовательской деятельности учащихся. Образовано в 2007
          году. Имеет региональные отделения в 43 субъектах Российской
          Федерации, осуществляет деятельность на территории 70 субъектов.
          Ежегодно при поддержке Движения проводится более 300 мероприятий, в
          которых участвует более 50 000 школьников и педагогов.
        </div>
        <br />
        <div className="div1">
          <strong>Проект направлен на</strong> развитие научно-практического
          образования (научно-технического творчества, проектной и
          исследовательской деятельности) в республике Башкортостан, создание
          системы научно-методического и консультационного сопровождения
          образовательных учреждений в этой области путем поддержки и
          методического сопровождения региональных научно-практических
          конференций и конкурсов школьников, научно-методических мероприятий
          педагогов, курсов повышения квалификации руководителей проектных и
          исследовательских работ школьников, экспертизы качества мероприятий.
          Научно-практическое образование – направление образования, основанное
          на технологиях исследовательской и проектной деятельности учащихся,
          позволяет раскрыть сущность деятельностного содержания образования и
          направлено на саморазвитие личности обучающихся. Научно-практическое
          образование использует научный метод познания и созидания,
          инструментами которого являются анализ, эксперимент, обобщение и др.,
          как в естественных, так и в гуманитарных науках.
        </div>
        <br />
        <div className="div1">
          В 2016 году по инициативе представителей Башкирского регионального
          отделения Межрегионального общественного Движения творческих педагогов
          «Исследователь», Министерства образования РБ, при поддержке Института
          развития образования в нашей республике прошел I региональный этап
          Конкурса юношеских исследовательских работ{" "}
          <strong>им. В.И.Вернадского</strong>. Ежегодно Конкурс был посвящен
          значимым событиям в жизни нашей республики. Так в 2017 году II
          региональный конкурс юношеских исследовательских работ имени В.И.
          Вернадского посвящён Году экологии и особо охраняемых природных
          территорий Республики Башкортостан.{" "}
        </div>
        <br />
        <div className="div1">
          <strong>Цель конкурса</strong> – формирование интереса школьников к
          фундаментальным наукам о Земле, биосфере, человечестве, его истории и
          культуре; духовно-нравственное, экологическое воспитание,
          интеллектуальное и творческое развитие обучающихся Республики
          Башкортостан посредством исследования ее территории, неповторимой
          природы, богатейшего культурно-исторического наследия, традиций и
          обычаев населяющих регион народов, жизни и деятельности людей,
          способствовавших развитию духовной и материальной культуры России.
        </div>
        <br />
        <div className="div1">
          <strong>В задачи Конкурса входят:</strong>
          <ul>
            <li>
              выявление и поддержка талантливых детей в сфере интеллектуальной
              деятельности, развитие образовательных программ и методик,
              основанных на исследовательской̆ деятельности обучающихся;
            </li>
            <li>
              содействие их широкому распространению в образовательной системе;
            </li>
            <li>
              развитие межрегиональной сетевой проектно-исследовательской школы,
              основанной на применении исследовательской деятельности
              обучающихся в общем образовании и создании сообщества
              профессиональных ученых, преподавателей высшей школы, творческих
              педагогов.
            </li>
          </ul>
        </div>
        По результатам экспертизы представленных работ определяются участники
        очного тура, проходящего в форме стендовой защиты работ. Наш конкурс
        проходит в не совсем привычном для многих формате – стендовой сессии,
        принятой на многих научно-практических конференциях различного уровня.
        Такой формат проведения конкурса позволяет знакомиться с работами других
        участников, свободно общаться, задавать друг другу вопросы и даже
        оценивать. В рамках мероприятия проходит конкурс междисциплинарных
        проектов, выполняемых на основе результатов двух исследовательских
        работ. Авторы двух работ из разных секций должны самостоятельно найти
        точки соприкосновения, чтобы при объединении результатов их личных
        исследований открывалась новая междисциплинарная перспективная тема.
        Кроме того, всех участников ждет творческое общение, возможность
        попробовать свои силы, получить опыт публичного выступления в комфортной
        доброжелательной обстановке. Экспертами было отмечено, что формат
        проведения конкурса был одобрен и поддержан участниками и их
        руководителями. Большая часть работ имеет научную ценность и выполнена в
        соответствии с требованиями, имеет выраженную практическую
        направленность и значимость. Актуальность большинства работ не вызывает
        сомнений. Пройдя региональный этап, авторы лучших работ смогут
        участвовать в Юношеских чтениях им. В. И. Вернадского (очном туре
        Всероссийского конкурса им. В.И. Вернадского) в Москве и претендовать на
        присуждение премии Правительства РФ для поддержки талантливой молодежи.
        Для реализации проекта «Межрегиональная сеть реализации
        исследовательской и проектной деятельности обучающихся
        (научно-практического образования)», поддержанного грантом Президента
        Российской Федерации на развитие гражданского общества, на основании
        результатов участия победителей региональных туров прошлого года во
        Всероссийском конкурсе юношеских исследовательских работ им.
        В.И.Вернадского, принято решение о включении Вашего регионального
        отделения в проект и выделении софинансирования Вашего регионального
        тура из средств гранта в размере 50 000 (пятьдесят тысяч) рублей.
        Конкурс включен в перечень олимпиад и иных интеллектуальных и (или)
        творческих конкурсов, мероприятий, направленных на развитие
        интеллектуальных и творческих способностей, способностей к занятиям
        физической культурой и спортом, интереса к научной
        (научно-исследовательской), творческой, физкультурно-спортивной
        деятельности, а также на пропаганду научных знаний, творческих и
        спортивных достижений.
      </div>
    </div>
  );
}

export default Main;
