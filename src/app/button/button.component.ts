import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {

  @Input()
  badgeCorner: boolean;

  @Input()
  badge: string;

  @Input()
  size: 'small' | 'normal' | 'big' = 'normal';

  @Input()
  outline: boolean;

  @Input()
  text: string = 'Botão';

  @Input()
  colorBadge: string = 'dark'

  @Input()
  classColor: string = 'primary';

  constructor() {}

  ngOnInit() {}

  getButtonSizeClass() {
    switch (this.size) {
      case 'small':
        return 'btn-sm';
      case 'normal':
        return '';
      case 'big':
        return 'btn-lg';
    }
  }

  getButtonClassColor() {
    if (this.outline) {
      return 'btn-outline-' + this.classColor;
    }
    return 'btn-' + this.classColor;
  }
}
