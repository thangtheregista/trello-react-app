import React from "react";

function ListContainer() {
  return (
    <section>
      <div class="lists-container">
        <div class="list">
          <h3 class="list-title">Tasks to Do</h3>
          <ul class="list-items">
            <li draggable="true">
              Complete mock-up for client website <button class="x">X</button>
            </li>
            <li draggable="true">
              Email mock-up to client for feedback<button class="x">X</button>
            </li>
            <li draggable="true">
              Update personal website header background image
              <button class="x">X</button>
            </li>
            <li draggable="true">
              Update personal website heading fonts<button class="x">X</button>
            </li>
            <li draggable="true">
              Add google map to personal website<button class="x">X</button>
            </li>
            <li draggable="true">
              Begin draft of CSS Grid article<button class="x">X</button>
            </li>
            <li draggable="true">
              Read new CSS-Tricks articles<button class="x">X</button>
            </li>
            <li draggable="true">
              Read new Smashing Magazine articles<button class="x">X</button>
            </li>
            <li draggable="true">
              Read other bookmarked articles<button class="x">X</button>
            </li>
            <li draggable="true">
              Look through portfolios to gather inspiration
              <button class="x">X</button>
            </li>
            <li draggable="true">
              Create something cool for CodePen<button class="x">X</button>
            </li>
            <li draggable="true">
              Post latest CodePen work on Twitter<button class="x">X</button>
            </li>
            <li draggable="true">
              Listen to new Syntax.fm episode<button class="x">X</button>
            </li>
            <li draggable="true">
              Listen to new CodePen Radio episode<button class="x">X</button>
            </li>
          </ul>
          <input
            type="text"
            placeholder="Add a card..."
            class="add-card-btn btn  "
          ></input>
        </div>
        <div class="list">
          <h3 class="list-title">Completed Tasks</h3>

          <ul class="list-items">
            <li draggable="true">
              Clear email inbox<button class="x">X</button>
            </li>
            <li draggable="true">
              Finalise requirements for client web design
              <button class="x">X</button>
            </li>
            <li draggable="true">
              Begin work on mock-up for client website
              <button class="x">X</button>
            </li>
          </ul>

          <input
            type="text"
            placeholder="Add a card..."
            class="add-card-btn btn  "
          ></input>
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="Add a list..."
          class="add-list-btn btn"
        ></input>
      </div>
    </section>
  );
}

export default ListContainer;
