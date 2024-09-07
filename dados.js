let prontuarios = [
    {
    paciente: {
      nome: "João da Silva",
      dataNascimento: "1980-01-01",
      sexo: "Masculino",
      endereco: "Rua dos Bobos, 0",
      contato: {
        telefone: "(11) 1234-56785",
        email: "joao@email.com"
      }
    },
    historico: {
        doencas:["Hipertensão", "Diabetes"],
        alergias:["Penicilina"],
        medicamentos:["Losartana", "Metformina"],
    },

    consultas: [
        {
            data: "2023-11-22",
            motivo: "Dor de cabeça",
            diagnostico: "Cefaleia tensional",
            tratamento: "Analgésicos",
            exames: [
                {
                    tipo: "Tomografia",
                    resultado: "Normal"
                }
            ]
        }
    ]
  },
    {
    paciente: {
      nome: "Maria Silva",
      dataNascimento: "1990-05-15",
      sexo: "Feminino",
      endereco: "Rua das Flores, 123",
      contato: {
        telefone: "(21) 98765-4321",
        email: "maria@email.com"
      }
    },
    historico: {
        doencas:["Asma"],
        alergias:["Pollen"],
        medicamentos:["Salbutamol"],
    },

    consultas: [
        {
            data: "2023-12-05",
            motivo: "Falta de ar",
            diagnostico: "Crise asmática",
            tratamento: "Inalador",
            exames: []
        }
    ]
  },
  {
    paciente: {
      nome: "Pedro Almeida",
      dataNascimento: "1975-11-20",
      sexo: "Masculino",
      endereco: "Rua dos Bobos, 0",
      contato: {
        telefone: "(11) 1234-26655",
        email: "pedro@email.com"
      }
    },
    historico: {
        doencas:["Diabetes"],
        alergias:["Penicilina"],
        medicamentos:["Metformina"],
    },

    consultas: [
        {
            data: "2023-11-22",
            motivo: "Dor de cabeça",
            diagnostico: "Cefaleia tensional",
            tratamento: "Analgésicos",
            exames: []
        }
    ]
  }
];
