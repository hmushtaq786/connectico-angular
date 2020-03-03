import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add-team-members",
  templateUrl: "./add-team-members.component.html",
  styleUrls: ["./add-team-members.component.css"]
})
export class AddTeamMembersComponent implements OnInit {
  members = [
    {
      name: "Hamza Mushtaq",
      email: "hm.khanzada786@gmail.com",
      image: "https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
    },
    {
      name: "Ali Mushtaq",
      email: "ali.mushtaq@gmail.com",
      image: "https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
    },
    {
      name: "Basit Ahmed",
      email: "ahmed.basit@gmail.com",
      image: "https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
    },
    {
      name: "Aisha Khan",
      email: "khan.aisha@gmail.com",
      image: "https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
    },
    {
      name: "Amjad Dawood",
      email: "amjad.dawood@gmail.com",
      image: "https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
    },
    {
      name: "Ahmer Raza",
      email: "ahmer.raza@gmail.com",
      image: "https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
    },
    {
      name: "Hamza Mushtaq",
      email: "hm.khanzada786@gmail.com",
      image: "https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
    },
    {
      name: "Ali Mushtaq",
      email: "ali.mushtaq@gmail.com",
      image: "https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
    },
    {
      name: "Basit Ahmed",
      email: "ahmed.basit@gmail.com",
      image: "https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
    },
    {
      name: "Aisha Khan",
      email: "khan.aisha@gmail.com",
      image: "https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
    },
    {
      name: "Amjad Dawood",
      email: "amjad.dawood@gmail.com",
      image: "https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
    },
    {
      name: "Ahmer Raza",
      email: "ahmer.raza@gmail.com",
      image: "https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
