import { Component } from '@angular/core';
import { CardComponent, GridComponent } from "@kiranshub/dashboard-ui";

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="mb-6">
      <particle-card>
        <h1 class="text-5xl font-bold mb-4">Dashboard Overview</h1>
        <p>Get a quick glance at your key metrics and insights.</p>
      </particle-card>
    </div>

    <particle-grid [gap]="'sm'" [cols]="2">
      <particle-card>Item 1</particle-card>
      <particle-card>Item 2</particle-card>
      <particle-card>Item 3</particle-card>
      <particle-card>Item 4</particle-card>

      <particle-card>Item 1</particle-card>
      <particle-card>Item 2</particle-card>
      <particle-card>Item 3</particle-card>
      <particle-card>Item 4</particle-card>
    </particle-grid>
  `,
  imports: [CardComponent, GridComponent],
})
export class HomeComponent {}
