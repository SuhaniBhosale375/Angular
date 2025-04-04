import { Component } from '@angular/core';
import { NgSwitch } from '@angular/common';
import { NgSwitchCase } from '@angular/common';
import { NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-switchdemo',
  imports: [NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './switchdemo.component.html',
  styleUrl: './switchdemo.component.css'
})
export class SwitchdemoComponent {
  public Language = "Java";
}
