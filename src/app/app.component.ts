import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    trigger("square", [
      state(
        "normal",
        style({
          backgroundColor: "white",
          border: "2px solid #444",
          borderRadius: "0"
        })
      ),
      state(
        "wild",
        style({
          backgroundColor: "red",
          border: "none",
          borderRadius: "50%"
        })
      ),
      transition(":enter", [style({ backgroundColor: "blue" }), animate(1000)]),
      transition("normal <=> wild", animate(500))
    ])
  ]
})
export class AppComponent implements OnInit {
  public state = "normal";

  ngOnInit() {}
}
