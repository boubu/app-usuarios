import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  standalone: false,
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent {
  usuarios: any[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuarioService.usuarios$.subscribe(usuarios => {
      this.usuarios = usuarios;
    });
  }
}