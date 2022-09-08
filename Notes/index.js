// dropdown on hover start
let Menu1 = document.querySelector("#drop");
let menu = document.querySelector('#dropDown');
Menu1.addEventListener('mouseenter', () => {
  console.log(menu.style.display = "block");
})
Menu1.addEventListener('mouseleave', () => {
  console.log(menu.style.display = "none");
})
// dropdown on hover end
let addNote = document.getElementById("add");

let closeBtn = document.getElementById("close");
addNote.addEventListener("click",()=>{
    addNote.style.display = "none";
    showDiv.style.display = "block";
    title.focus();//this always add the writing cursor to the title part
})
const close = () =>{
    isUpdate = false;
    title.value = "",
    desc.value = "";
    addNote.style.display = "block";
    showDiv.style.display = "none";
    heading.innerHTML = `Add Note`;
    save.innerHTML = "Save";
}
closeBtn.addEventListener("click", close);



//note Section
let showDiv = document.getElementById("note");
    let heading = document.querySelector(".heading h1");
    // console.log(heading);
    let save = document.getElementById("save");
    let desc = document.querySelector("#textArea")
    let title = document.querySelector("#title");
    let mainSection = document.querySelector(".note-list");
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    //getting local storage notes if exists : parsing them to js object, else : passing an empty array to notes
    const notes = JSON.parse(localStorage.getItem("note")||"[]");
    let isUpdate = false, updateId;

    const showNotes = () =>{
      document.querySelectorAll(".mainList").forEach(elem =>{
        elem.remove();
      });//removes all previous notes before adding new.

      notes.forEach((element,index) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("mainList");
        let HTMLElem = `<h1>Item ${index+1}</h1>
                        <hr>
                        <div class="maintdhl">
                          <div class="note_part">
                            <div class="head">${element.title}</div><br>
                            <div class="description">${element.description}</div>
                          </div>
                          <div class="headCont">
                            <div class="settings">
                              <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                              <ul class="menu">
                                <li onclick="updateNote(${index},'${element.title}','${element.description}')">
                                  <i class="uil uil-pen"></i> Edit
                                </li>
                                <li onclick="deleteNote(${index})">
                                  <i class="uil uil-trash"></i> Delete
                                </li>
                              </ul>
                            </div>
                            <span class="date">${element.date}</span>
                          </div>
                        </div>`;

        newDiv.insertAdjacentHTML("beforeend",HTMLElem);
        mainSection.appendChild(newDiv);
      });
    }


    showNotes();


    function showMenu(elem){
      elem.parentElement.classList.add("show");
      //remove show class on the settings menu when clicked on document (anywhere except the i tag and the i element)
      document.addEventListener("click", e =>{
        // console.log(e.target.tagName);
        if(e.target.tagName != "I" || e.target != elem){
          elem.parentElement.classList.remove("show");
        }
      })
    }


    const deleteNote = (dNoteID) =>{
      let confirmMsg = confirm("Are you sure you want to delete this note ?");
      if(!confirmMsg) return;
      // console.log(dNoteID);//gets the index of the element that was clicked
      notes.splice(dNoteID,1);//removing selected note from array
      //saving updated notes to localstorage;
      localStorage.setItem("note",JSON.stringify(notes));
      showNotes();
    }

    const updateNote = (noteID,uTitle,uDesc) =>{
      isUpdate = true;
      updateId = noteID;
      console.log(noteID,uTitle,uDesc);
      addNote.click();
      heading.style.fontSize = "35px";
      heading.innerHTML = `Update Note ${noteID+1}`;
      save.innerHTML = `Update`;
      title.value = uTitle,
      desc.value = uDesc;
    }
    save.addEventListener("click", () => {
      let tValue = title.value,
        dValue = desc.value;


      if (tValue && dValue) {
        if (tValue || dValue) {
          //getting the date
          let dateObj = new Date(),
          month = months[dateObj.getMonth()],
          day = dateObj.getDay(),
          year = dateObj.getFullYear();
          
          //consolidating the info into an object
          const notesInfo = {
            title : tValue, description : dValue, date : `${month} ${day}, ${year}`
          }
          
          // storing the informations in the form of an array   => array of objects
          // notes.push(notesInfo);//adding new note to "[notes]"
          //saving notes to local storage => localStorage.setItem("note", notes);
          if(!isUpdate){
            notes.push(notesInfo);
          }else{
            isUpdate = false;//resetting the isUpdate value to false
            notes[updateId] = notesInfo;//updates the specified part (having index which was clicked).
          }


          //only object is getting stored to get or access the value in accessible format we have to covert the object into string
          localStorage.setItem("note", JSON.stringify(notes));// => but with only this the data will always be overwritten to avoid this follow the code written after months array
          closeBtn.click();
          
          showNotes();// => this will show duplicate notes to fix go near to the newDiv variable.
        }
      }
    })

