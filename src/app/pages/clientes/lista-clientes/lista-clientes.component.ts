import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Table } from 'primeng/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  @ViewChild('tabela') table: Table;

  rowsPerPageTable: number[] = [10,20,30,50,100,200];
  messagePageReport: 'Mostrando {first} a {last} de {totalRecords} registros';
   clientes: any;
   cols: any[] | undefined;

  constructor(
    private title: Title,
    private clienteService: ClientesService,
    private ngxspinner: NgxSpinnerService 
  ){}
  ngOnInit(): void {
    this.title.setTitle('Lista de Clientes');
    this.carregarMotivos();

    this.cols = [
      {field: 'id', header: 'ID', width: '80px', type: 'text'},
      {field: 'descricao', header: 'Descrição', width: '150px', type: 'text'},
      {field: 'status', header: 'Status', width: '80px', type: 'boolean'},
    ]
}

refresh(){}

onClear(){}

carregarMotivos(){
  this.ngxspinner.show();
  this.clienteService.listarClientes()
  .then(obj => {
    this.clientes = obj;
    this.ngxspinner.hide();
  })
  .catch((erro) => {
    this.ngxspinner.hide();
    // this.errorHandler.handle(erro);
  })
}
}