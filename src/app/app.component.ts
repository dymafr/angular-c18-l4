import {
  animate,
  group,
  keyframes,
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
      // transition(
      //   "normal => wild",
      //   animate(
      //     1000,
      //     keyframes([
      //       style({ backgroundColor: "yellow", offset: 0 }),
      //       style({ backgroundColor: "green", offset: 0.2 }),
      //       style({ backgroundColor: "blue", offset: 0.4 }),
      //       style({ backgroundColor: "orange", offset: 0.6 }),
      //       style({ backgroundColor: "teal", offset: 0.8 })
      //     ])
      //   )
      // ),
      transition(
        "normal => wild",
        group([
          animate(200, style({ borderRadius: "50%" })),
          animate(2000, style({ backgroundColor: "red" }))
        ])
      )
    ])
  ]
})
export class AppComponent implements OnInit {
  public state = "normal";

  ngOnInit() {}
}
