import logo from "./logo.svg";
import "./App.css";
import NavHeader from "./components/NavHeader";
import BoardInfo from "./components/BoardInfo";
import ListContainer from "./components/ListContainer";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  const delButs = document.querySelectorAll(".x");

  const deleteHander = (e) => {
    e.addEventListener("click", () => {
      e.parentElement.remove();
    });
  };
  delButs.forEach((delButs) => {
    delButs.addEventListener("mouseover", () => {
      deleteHander(delButs);
    });

    /* 4 69 */

    const draggables = document.querySelectorAll("li"); //select all li
    const containers = document.querySelectorAll("ul.list-items"); //and containers
    // add dragging effect
    setDrag = (e) => {
      e.addEventListener("dragstart", () => {
        e.classList.add("dragging");
      });
      e.addEventListener("dragend", () => {
        e.classList.remove("dragging");
      });
    };
    draggables.forEach((draggable) => {
      setDrag(draggable);
    });

    //dropping li between containers
    //get the closet li to the cursor
    function getDragAfterElement(container, y) {
      const draggableElements = [
        ...container.querySelectorAll("li:not(.dragging)"),
      ];
      return draggableElements.reduce(
        (closest, child) => {
          const box = child.getBoundingClientRect();
          const offset = y - box.top - box.height / 2;
          if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
          } else {
            return closest;
          }
        },
        { offset: Number.NEGATIVE_INFINITY }
      ).element;
    }
    //drop above the closest li
    setDrop = (e) => {
      e.addEventListener("dragover", (event) => {
        event.preventDefault();
        const afterElement = getDragAfterElement(e, event.clientY);
        const draggable = document.querySelector(".dragging");
        if (afterElement == null) {
          e.appendChild(draggable); //if no li below, append to last
        } else {
          e.insertBefore(draggable, afterElement);
        }
      });
    };
    containers.forEach((container) => {
      setDrop(container);
    });

    const inputBoxes = document.querySelectorAll(".add-card-btn");
    //add item to list function
    addItem = (e) => {
      e.addEventListener("keyup", (event) => {
        if (event.which === 13) {
          if (e.value.trim() !== "") {
            const divList = e.parentElement;
            const ul = divList.querySelector("ul");
            const li = document.createElement("li");
            const delBtn = document.createElement("button");
            delBtn.classList.add("x");
            delBtn.innerHTML = "X";
            li.draggable = true;
            li.innerHTML = e.value;
            li.appendChild(delBtn);
            delBtn.addEventListener("click", deleteHandler(delBtn));
            li.addEventListener("click", setDrag(li));
            event.preventDefault();
            event.target.value = "";
            ul.appendChild(li);
          }
        }
      });
    };
    inputBoxes.forEach((inputBox) => {
      addItem(inputBox);
    });

    const addListBox = document.querySelector(".add-list-btn");
    //add new list box
    addNewListBox = (text) => {
      const listContainer = document.querySelector(".lists-container");
      const listBox = document.createElement("div");
      listBox.classList.add("list");
      const ul = document.createElement("ul");
      ul.classList.add("list-items");
      // const id = Date().toString().replace(/ /g, "");
      const header = document.createElement("h3");
      header.classList.add("list-title");
      header.innerHTML = text;
      const inputBox = document.createElement("input");
      listContainer.appendChild(listBox);
      inputBox.classList.add("add-card-btn");
      inputBox.classList.add("btn");
      inputBox.placeholder = "Add a card...";
      inputBox.addEventListener("click", addItem(inputBox));
      ul.addEventListener("dragover", setDrop(ul));
      listBox.appendChild(header);
      listBox.appendChild(ul);
      listBox.appendChild(inputBox);
    };
    addListBox.addEventListener("keyup", (e) => {
      if (e.which === 13) {
        if (addListBox.value.trim() !== "") {
          addNewListBox(addListBox.value);
          addListBox.value = "";
        }
      }
    });
  });
  return (
    <div className="App">
      <NavHeader />
      <BoardInfo />
      <ListContainer />
    </div>
  );
}

export default App;
