import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  standalone: false,
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {
  usuarioEditado = { id: 0, nome: '' };
  idBusca?: number;

  constructor(private usuarioService: UsuarioService) {}

  buscarUsuario() {
    if (this.idBusca) {
      const usuario = this.usuarioService.getUsuarioById(this.idBusca);
      if (usuario) {
        this.usuarioEditado = { ...usuario };
      } else {
        alert('Usuário não encontrado!');
      }
    }
  }

  salvarEdicao() {
    if (this.usuarioEditado.id && this.usuarioEditado.nome.trim()) {
      this.usuarioService.atualizarUsuario(this.usuarioEditado);
      alert('Usuário atualizado com sucesso!');
      this.usuarioEditado = { id: 0, nome: '' };
      this.idBusca = undefined;
    }
  }
}