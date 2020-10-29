import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  @Input() item: string;

  currentItem = 'Television';
  constructor() { }
  personList = [{ name: 'Jahanzaib', age: '24', phone: '0313-xxxxxxx' },
  { name: 'Arsalan', age: '24', phone: '0313-xxxxxxx' },
  { name: 'Aijaz', age: '24', phone: '0313-xxxxxxx' }];

  deleteRow(index) {
    this.personList.splice(index, 1)
    alert('delete');
  }

  obj = { name: 'sohail', age: '25', phone: '0313-xxxxxxx' };

  editRow(index) {
    let name = prompt('Enter your name', this.personList[index].name);
    let age = prompt('Enter your age', this.personList[index].age);
    let phone = prompt('Enter your phone', this.personList[index].phone);

    this.personList.splice(index, 1, { name: name, age: age, phone: phone })
    alert('edit')
  }

  addItem() {
    let name = prompt('Enter your name *');
    let age = prompt('Enter your age *');
    let phone = prompt('Enter your phone *');
    if (name && age && phone) {
      this.personList.push({ name: name, age: age, phone: phone })
    }
  }

  ngOnInit(): void {
  }

}
