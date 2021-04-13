import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jokes-page',
  templateUrl: './jokes-page.component.html',
  styleUrls: ['./jokes-page.component.css']
})
export class JokesPageComponent implements OnInit {
  joke: string;

  constructor() {
    this.joke = '';
  }

  ngOnInit(): void {
  }

  switchTheme(): void {
    const html = document.documentElement;
    const btn = document.getElementById('dark-btn');

    if (html.classList.contains('dark')){
        html.classList.remove('dark');
        btn.innerText = 'Dark mode on';
    }else{
        html.classList.add('dark');
        btn.innerText = 'Dark mode off';
    }

  }

  getNewJoke(): void{
    const apiUrl = 'https://api.chucknorris.io/jokes/random';
    async function fetchJokefromApi(): Promise<string> {
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data.value;
    }
    fetchJokefromApi()
      .then(joke => this.setJoke(joke));
  }

  setJoke(newJoke: string): void {
    const text = document.getElementById('joke');
    text.innerText = newJoke;
  }

}
