create table turma (
    id int primary key auto_increment,
    nome varchar(200) 
);

create table aluno (
    id int primary key auto_increment,
    turma_id int,
    nome varchar(250),
    email varchar(250),
    data_nascimento date,
    foreign key (turma_id) references turma(id)
);