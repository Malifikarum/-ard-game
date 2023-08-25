import { goToPage,page, setPage } from "../main.js";
import { EASY_PAGE, HARD_PAGE, MEDIUM_PAGE} from "../modules/routes.js";


export function renderFirstPageComponent(appEl){
    let firstPageHtml=`
    <section class="main-box center">
        <h1 class="title">Выбери сложность</h1>
        <form action="#" class="difficulty-box">
            <div class="difficulty">
                <input type="radio" id="easyBtn" name="radio" value="1" checked/>
                <label for="easyBtn">1</label>
            </div>
            <div class="difficulty">
                <input type="radio" id="mediumBtn" name="radio" value="2"/>
                <label for="mediumBtn">2</label>
            </div>
            <div class="difficulty">
                <input type="radio" id="hardBtn" name="radio" value="3"/>
                <label for="hardBtn">3</label>
            </div>
            
        </form>
        <button type="submit" id="startBtn" class="button">Старт</button>
    </section>
    `;
    appEl.innerHTML=firstPageHtml;

    const easyBtn = document.getElementById("easyBtn");
    const mediumBtn = document.getElementById("mediumBtn");
    const hardBtn = document.getElementById("hardBtn");
    const startBtn = document.getElementById("startBtn");
    const btnCollection = [easyBtn, mediumBtn, hardBtn];

    btnCollection.forEach((el)=>{
        el.addEventListener("click",()=>{
            btnCollection.forEach((el)=>{
                el.removeAttribute("checked");
            });
            el.setAttribute("checked", "");  
        });
    });
    
    startBtn.addEventListener("click",()=>{
        if(easyBtn.hasAttribute("checked")){
            setPage(EASY_PAGE);
            goToPage(page);
        };
        if(mediumBtn.hasAttribute("checked")){
            setPage(MEDIUM_PAGE);
            goToPage(page);
        };
        if(hardBtn.hasAttribute("checked")){
            setPage(HARD_PAGE);
            goToPage(page);
        };
    });

};