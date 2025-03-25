import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  standalone: false,
  selector: 'app-inserir-usuario',
  templateUrl: './inserir-usuario.component.html',
  styleUrls: ['./inserir-usuario.component.css']
})
export class InserirUsuarioComponent {
  novoUsuario = '';

  constructor(private usuarioService: UsuarioService) {}

  adicionarUsuario() {
    if (this.novoUsuario.trim()) {
      this.usuarioService.adicionarUsuario(this.novoUsuario);
      this.novoUsuario = '';
    }
  }
}