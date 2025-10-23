/*********************************************************************
 * Functionalities of the user profile of the user profile
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *******************************************************************/


// DEFINITION

    const thumbnailImgLen = 10;
    const bacdropsImgArr = [`black`, `blue`, `green`, `grey`, `lime`, `orange`, `pink`, `purple`, `red`, `yellow`];
    const dfltAbtText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolor aliquid asperiores, ut enim fugit a numquam nisi libero doloribus dolores eligendi, eaque cumque beatae accusantium, distinctio vero? Explicabo, eaque`;


// INITIALIZATION

    window.onload = () => 
    {
        const prflBdr = document.createElement("div");
        prflBdr.className = "prfl_bdr";
        prflBdr.innerHTML = 
        `
            <div class="prfl_box">
                <div class="prfl_bcg_bdr">
                    <div class="prfl_bcg_box">
                        <img src="images/backdrops/blue.jpg" alt="Profile background image" class="prfl_bcg_img">
                    </div>
                    <div class="prfl_edit_img_box">
                        <button type="button" class="prfl_edit_img_btn">
                            <div class="prfl_edit_img_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="prfl_edit_img_svg">
                                    <path d="m11.4 18.161l7.396-7.396a10.3 10.3 0 0 1-3.326-2.234a10.3 10.3 0 0 1-2.235-3.327L5.839 12.6c-.577.577-.866.866-1.114 1.184a6.6 6.6 0 0 0-.749 1.211c-.173.364-.302.752-.56 1.526l-1.362 4.083a1.06 1.06 0 0 0 1.342 1.342l4.083-1.362c.775-.258 1.162-.387 1.526-.56q.647-.308 1.211-.749c.318-.248.607-.537 1.184-1.114m9.448-9.448a3.932 3.932 0 0 0-5.561-5.561l-.887.887l.038.111a8.75 8.75 0 0 0 2.092 3.32a8.75 8.75 0 0 0 3.431 2.13z" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
                <div class="prfl_ctnt_bdr">
                    <div class="prfl_ctnt_box">
                        <div class="prfl_thumb_bdr">
                            <div class="prfl_thumb_box">
                                <img src="images/thumbnails/0.jpg" alt="Profile thumbnail image" class="prfl_thumb_img">
                            </div>
                        </div>
                        <div class="prfl_name_box">
                            <h3 class="prfl_disp_text">Display_Name</h3>
                            <p class="prfl_user_text">@user_name</p>
                        </div>
                        <div class="prfl_follow_box">
                            <p class="prfl_follow_text">
                                <span class="value">0</span>
                                <span class="key">following</span>
                            </p>
                            <p class="prfl_follow_text">
                                <span class="value">0</span>
                                <span class="key">followers</span>
                            </p>
                        </div>
                        <div class="prfl_bio_box">
                            <p class="prfl_bio_title">About</p>
                            <p class="prfl_bio_text">${dfltAbtText}</p>
                        </div>
                        <button type="button" class="prfl_atn_btn prfl_edit_info_btn">Edit Info</button>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentElement(`afterbegin`, prflBdr);
        
        // Open Edit Image Modal
        prflBdr.querySelector(".prfl_edit_img_btn").onclick = () => init_edit_img();

        // Open Edit Info Modal
        prflBdr.querySelector(".prfl_edit_info_btn").onclick = () => init_edit_info();
    }


// EDITING IMAGES

    const init_edit_img = () =>
    {
        const editMdlbase = document.createElement("div")
        editMdlbase.className = "edit_modal_base";
        editMdlbase.innerHTML = 
        `
            <div class="edit_modal_bdr">
                <div class="edit_modal_box">
                    <div class="edit_title_box">
                        <h2 class="edit_title_text">Choose thumbnail/backdrop</h2>
                    </div>
                    <div class="edit_ctnt_box">
                        <div class="edit_img_ctnt_bdr" data-img-set="thumbnails">
                            <div class="edit_img_ctnt_box">
                                <div class="edit_img_title_box">
                                    <h3 class="edit_img_title_text">Thumbnails</h3>
                                </div>
                                <div class="edit_img_crsl_bdr">
                                    <div class="edit_img_crsl_box"></div>
                                </div>
                            </div>
                        </div>
                        <div class="edit_img_ctnt_bdr" data-img-set="backdrops">
                            <div class="edit_img_ctnt_box">
                                <div class="edit_img_title_box">
                                    <h3 class="edit_img_title_text">Backdrops</h3>
                                </div>
                                <div class="edit_img_crsl_bdr">
                                    <div class="edit_img_crsl_box"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="edit_save_box">
                        <button type="button" class="prfl_atn_btn edit_save_btn">Save & Close</button>
                    </div>
                </div>
            </div>
        `;

        const editThumbCrsl = editMdlbase.querySelector(`.edit_img_ctnt_bdr[data-img-set='thumbnails'] .edit_img_crsl_box`);
        const editBcgCrsl = editMdlbase.querySelector(`.edit_img_ctnt_bdr[data-img-set='backdrops'] .edit_img_crsl_box`);

        // Build thumbnnail carousel
        for(let t = 0; t < thumbnailImgLen; t++)
        {
            editThumbCrsl.innerHTML +=
            `
                <div class="edit_img_card_bdr" data-img-set="thumbnails">
                    <div class="edit_img_check_bdr">
                        <div class="edit_img_check_box">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="edit_img_check_icon">
                                <path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5.97-3.03a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <div class="edit_img_card_box">
                        <img src="images/thumbnails/${t}.jpg" alt="Thumbnail image ${t + 1}" class="edit_img_src">
                    </div>
                </div>
            `;
        }

        // Build backdrops carousel
        editBcgCrsl.innerHTML = bacdropsImgArr.map((item, b) => 
        {
            return `
                <div class="edit_img_card_bdr" data-img-set="backdrops">
                    <div class="edit_img_check_bdr">
                        <div class="edit_img_check_box">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="edit_img_check_icon">
                                <path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5.97-3.03a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <div class="edit_img_card_box">
                        <img src="images/backdrops/${item}.jpg" alt="Backdrop image ${b + 1}" class="edit_img_src">
                    </div>
                </div>
            `;
        }).join("");


        // Insert into DOM
        document.body.insertAdjacentElement(`beforeend`, editMdlbase);

        // Display modal
        setTimeout(() => editMdlbase.classList.add("active"), 100);

        // Selectors
        const thumbImgCards = editMdlbase.querySelectorAll(".edit_img_card_bdr[data-img-set='thumbnails']");
        const bcgImgCards = editMdlbase.querySelectorAll(".edit_img_card_bdr[data-img-set='backdrops']");
        const saveEditBtn = editMdlbase.querySelector(".edit_save_btn");

        // Select a card
        thumbImgCards.forEach((card) => 
        {
            const sel_atn = () =>
            {
                thumbImgCards.forEach(prev => 
                {
                    if(prev.classList.contains("selected")) prev.classList.remove("selected");
                });
                card.classList.add("selected");
            }

            card.addEventListener("click", sel_atn);
        });
        bcgImgCards.forEach((card) => 
        {
            const sel_atn = () =>
            {
                bcgImgCards.forEach(prev => 
                {
                    if(prev.classList.contains("selected")) prev.classList.remove("selected");
                });
                card.classList.add("selected");
            }

            card.addEventListener("click", sel_atn);
        });

        // Save changes
        saveEditBtn.addEventListener("click", () => 
        {
            // Get selected thumbnail/backdrop
            const thumbSrc = editMdlbase.querySelector(".edit_img_card_bdr.selected[data-img-set='thumbnails'] .edit_img_src")?.getAttribute("src");
            const bcgSrc = editMdlbase.querySelector(".edit_img_card_bdr.selected[data-img-set='backdrops'] .edit_img_src")?.getAttribute("src");

            // Update if source is valid
            if((thumbSrc != null) && (thumbSrc !== "")) document.querySelector(".prfl_thumb_img").setAttribute("src", thumbSrc);
            if((bcgSrc != null) && (bcgSrc !== "")) document.querySelector(".prfl_bcg_img").setAttribute("src", bcgSrc);

            // Close and remove the modal
            editMdlbase.classList.remove("active");
            editMdlbase.addEventListener("transitionend", function hdlTrnstEnd()
            {
                editMdlbase.removeEventListener("transitionend", hdlTrnstEnd);
                editMdlbase.remove();
            });
        });
    }


// EDITING INFORMATION

    const init_edit_info = () =>
    {
        const editMdlbase = document.createElement("div")
        editMdlbase.className = "edit_modal_base";
        editMdlbase.innerHTML = 
        `
            <div class="edit_modal_bdr">
                <div class="edit_modal_box">
                    <div class="edit_title_box">
                        <h2 class="edit_title_text">Edit Your Information</h2>
                    </div>
                    <div class="edit_ctnt_box">
                        <div class="edit_info_ctnt_box">
                            <label for="edit_info_fld_disp" class="edit_info_title_box">
                                <h3 class="edit_info_title_text">Display Name</h3>
                            </label>
                            <div class="edit_info_fld_box">
                                <input type="text" name="edit_info_fld_disp" id="edit_info_fld_disp" class="edit_info_inp edit_info_fld_cls" placeholder="Enter a display name">
                            </div>
                        </div>
                        <div class="edit_info_ctnt_box">
                            <label for="edit_info_fld_usr" class="edit_info_title_box">
                                <h3 class="edit_info_title_text">User Name</h3>
                            </label>
                            <div class="edit_info_fld_box">
                                <input type="text" name="edit_info_fld_usr" id="edit_info_fld_usr" class="edit_info_inp edit_info_fld_cls" placeholder="Enter a user name">
                            </div>
                        </div>
                        <div class="edit_info_ctnt_box">
                            <label for="edit_info_fld_abt" class="edit_info_title_box">
                                <h3 class="edit_info_title_text">About</h3>
                            </label>
                            <div class="edit_info_txtar_box">
                                <textarea type="text" name="edit_info_fld_abt" id="edit_info_fld_abt" class="edit_info_inp edit_info_txtar_cls" placeholder="Enter a bio"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="edit_save_box">
                        <button type="button" class="prfl_atn_btn edit_save_btn">Save & Close</button>
                    </div>
                </div>
            </div>
        `;

        // Insert into DOM
        document.body.insertAdjacentElement(`beforeend`, editMdlbase);

        // Display modal
        setTimeout(() => editMdlbase.classList.add("active"), 100);

        const saveEditBtn = editMdlbase.querySelector(".edit_save_btn");
        const dispTextNode = document.querySelector(".prfl_disp_text");
        const usrTextNode = document.querySelector(".prfl_user_text");
        const abtTextNode = document.querySelector(".prfl_bio_text");
        const dispInp = editMdlbase.querySelector("#edit_info_fld_disp");
        const usrInp = editMdlbase.querySelector("#edit_info_fld_usr");
        const abtInp = editMdlbase.querySelector("#edit_info_fld_abt");
        const inpUsrRgx = new RegExp("^[A-Za-z0-9_]");

        // Filter input
        const fltrInp = (str) => 
        {
            return str
                .replace(/@/g, "")
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/=/g, "&quot;")
                .replace(/!/g, "&#039;")
                .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "");
        }

        usrInp.addEventListener("beforeinput", event => 
        {
            if((event.data != null) && !(inpUsrRgx.test(event.data))) 
                event.preventDefault();
        });

        // Set default values
        dispInp.value = fltrInp(dispTextNode?.textContent);
        usrInp.value = fltrInp(usrTextNode?.textContent);
        abtInp.value = abtTextNode?.innerHTML?.toString()?.split("<br>")?.map((item) => item).join("\n");

        // Save changes
        saveEditBtn.addEventListener("click", () => 
        {
            // Get names
            const dispName = fltrInp(dispInp.value?.toString()?.replace(/\s+/g, " "));
            const usrName = fltrInp(usrInp.value?.toString()?.replace(/\s+/g, " "));

            // Update names
            dispTextNode.textContent = 
            ((dispName != null) && (dispName !== "")) 
                ? dispName
                : `Display_Name`;
            usrTextNode.textContent = 
            ((usrName != null) && (usrName !== "")) 
                ? `@${usrName}`
                : `@user_name`;
            
            // Get & Update about text
            const abtTextFltr = fltrInp(abtInp.value);
            abtTextNode.innerHTML = "";
            
            if((abtTextFltr != null) && (abtTextFltr !== ""))
            {
                const abtTextLines = abtTextFltr.split("\n");
                abtTextLines.forEach((line, index) =>
                {
                    const txtNode = document.createTextNode(line);
                    abtTextNode.appendChild(txtNode);

                    // Insert line break after each newline
                    if((index < (abtTextLines.length - 1)))
                    {
                        abtTextNode.appendChild(document.createElement("br"));
                    }
                });
            }
            else
            {
                abtTextNode.appendChild(document.createTextNode(dfltAbtText));
            }

            // Close and remove the modal
            editMdlbase.classList.remove("active");
            editMdlbase.addEventListener("transitionend", function hdlTrnstEnd()
            {
                editMdlbase.removeEventListener("transitionend", hdlTrnstEnd);
                editMdlbase.remove();
            });
        });
    }
