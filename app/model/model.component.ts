import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-model',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './model.component.html',
  styleUrl: './model.component.css'
})
export class ModelComponent {

  @Input() isVisible = false;
  @Output() closeModal = new EventEmitter<void>();

  onClose(){
    this.closeModal.emit();
  }

}
