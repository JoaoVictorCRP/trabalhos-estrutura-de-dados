export function htmlRelatorio(opcao){
    // Função que retorna a estrutura html dos relatório

    if (opcao===2){
        return `<section class="menu"> <h3 class="titulo-relatorio">Relatório em ordem crescente por nome</h3>

        <div class="div-tabela">
            <!-- Tabela com os dados-->
            <table class="tabela-alunos">
                <thead>
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">RA</th>
                    <th scope="col">Idade</th>
                    <th scope="col">Sexo</th>
                    <th scope="col">Média</th>
                    <th scope="col">Resultado</th>
                </tr>
                </thead>
                <tbody class="corpo-tabela">
                <tr>
                    <td>Tico</td>
                    <td>109048</td>
                    <td>22</td>
                    <td>Masculino</td>
                    <td>7.8</td>
                    <td>Aprovado</td>
                </tr>
                </tbody>
    
                <!-- Roda pé da tabela-->
                <tfoot>
                <tr>
                    <!-- <th scope="row" colspan="2">Média de Aprovados</th> -->
                    <!-- <td>5</td> -->
                </tr>
                </tfoot>
            </table>
        </div> </section>`
    } else if (opcao===3) {
        return `<section class="menu"> <h3 class="titulo-relatorio">Relatório em ordem decrescente por RA</h3>

        <div class="div-tabela">
            <!-- Tabela com os dados-->
            <table class="tabela-alunos">
                <thead>
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">RA</th>
                    <th scope="col">Idade</th>
                    <th scope="col">Sexo</th>
                    <th scope="col">Média</th>
                    <th scope="col">Resultado</th>
                </tr>
                </thead>
                <tbody class="corpo-tabela">
                <tr>
                    <td>Tico</td>
                    <td>109048</td>
                    <td>22</td>
                    <td>Masculino</td>
                    <td>7.8</td>
                    <td>Aprovado</td>
                </tr>
                </tbody>
    
                <!-- Roda pé da tabela-->
                <tfoot>
                <tr>
                    <!-- <th scope="row" colspan="2">Média de Aprovados</th> -->
                    <!-- <td>5</td> -->
                </tr>
                </tfoot>
            </table>
        </div> </section>`
    } else if (opcao===4) {
        return `<section class="menu"> <h3 class="titulo-relatorio">Relatório de aprovados em ordem crescente, por nome</h3>

        <div class="div-tabela">
            <!-- Tabela com os dados-->
            <table class="tabela-alunos">
                <thead>
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">RA</th>
                    <th scope="col">Idade</th>
                    <th scope="col">Sexo</th>
                    <th scope="col">Média</th>
                    <th scope="col">Resultado</th>
                </tr>
                </thead>
                <tbody class="corpo-tabela">
                <tr>
                    <td>Tico</td>
                    <td>109048</td>
                    <td>22</td>
                    <td>Masculino</td>
                    <td>7.8</td>
                    <td>Aprovado</td>
                </tr>
                </tbody>
    
                <!-- Roda pé da tabela-->
                <tfoot>
                <tr>
                    <!-- <th scope="row" colspan="2">Média de Aprovados</th> -->
                    <!-- <td>5</td> -->
                </tr>
                </tfoot>
            </table>
        </div> </section>`
    };


}
