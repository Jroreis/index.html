// ============ AUTENTICAÇÃO ============

// Cadastro com email/senha
async function cadastrarUsuario(nome, email, senha) {
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(email, senha);
    
    // Salvar nome do usuário no Firestore
    await db.collection('users').doc(userCredential.user.uid).set({
      nome: nome,
      email: email,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    
    return { success: true, user: userCredential.user };
  } catch (error) {
    console.error('Erro ao cadastrar:', error);
    let mensagem = 'Erro ao cadastrar.';
    
    switch (error.code) {
      case 'auth/email-already-in-use':
        mensagem = 'Este email já está cadastrado.';
        break;
      case 'auth/weak-password':
        mensagem = 'A senha deve ter pelo menos 6 caracteres.';
        break;
      case 'auth/invalid-email':
        mensagem = 'Email inválido.';
        break;
      default:
        mensagem = 'Erro ao cadastrar. Tente novamente.';
    }
    
    return { success: false, message: mensagem };
  }
}

// Login com email/senha
async function loginUsuario(email, senha) {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, senha);
    return { success: true, user: userCredential.user };
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    let mensagem = 'Erro ao fazer login.';
    
    switch (error.code) {
      case 'auth/invalid-credential':
        mensagem = 'Email ou senha incorretos.';
        break;
      case 'auth/user-not-found':
        mensagem = 'Usuário não encontrado.';
        break;
      case 'auth/wrong-password':
        mensagem = 'Senha incorreta.';
        break;
      case 'auth/invalid-email':
        mensagem = 'Email inválido.';
        break;
      case 'auth/too-many-requests':
        mensagem = 'Muitas tentativas. Aguarde um momento.';
        break;
      default:
        mensagem = 'Erro ao fazer login. Tente novamente.';
    }
    
    return { success: false, message: mensagem };
  }
}

// Login com Google
async function loginComGoogle() {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);
    
    // Salvar/atualizar dados do usuário
    await db.collection('users').doc(result.user.uid).set({
      nome: result.user.displayName,
      email: result.user.email,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
    
    return { success: true, user: result.user };
  } catch (error) {
    console.error('Erro ao fazer login com Google:', error);
    
    if (error.code === 'auth/popup-closed-by-user') {
      return { success: false, message: 'Login cancelado.' };
    }
    
    return { success: false, message: 'Erro ao fazer login com Google.' };
  }
}

// Logout
async function logoutUsuario() {
  try {
    await auth.signOut();
    return { success: true };
  } catch (error) {
    return { success: false, message: 'Erro ao sair.' };
  }
}

// Buscar dados do usuário logado
async function buscarDadosUsuario(uid) {
  try {
    const doc = await db.collection('users').doc(uid).get();
    if (doc.exists) {
      return doc.data();
    }
    return null;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    return null;
  }
}

// Observador de autenticação
function observarAutenticacao(callback) {
  auth.onAuthStateChanged(async (user) => {
    if (user) {
      const dados = await buscarDadosUsuario(user.uid);
      callback({ logado: true, user: user, dados: dados });
    } else {
      callback({ logado: false, user: null, dados: null });
    }
  });
}