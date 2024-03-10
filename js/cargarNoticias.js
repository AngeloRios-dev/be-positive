$(document).ready(function() {
    var noticiasCargadas = 0;
    const noticiasPorPagina = 3;
    const noticiasLista = $('#lista-noticias');
    
    $('#btnMostrarMas').on('click', function() {
        $.ajax({
            url: './noticias/google_noticias.json',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                mostrarSiguientesNoticias(data);
            },
            error: function(xhr, status, error) {
                console.error('Error al cargar las noticias:', error);
            }
        });
    });

    function mostrarSiguientesNoticias(data) {
        for (let i = noticiasCargadas; i < noticiasCargadas + noticiasPorPagina; i++) {
            if (i >= data.length) {
                $('#btnMostrarMas').hide();
                break;
            }
            const noticia = data[i];
            const li = $('<li class="mb-3"></li>');
            const titulo = $('<p class="m-0"></p>').text(noticia.Title);
            const ul = $('<ul></ul>');
            const liLeerMas = $('<li></li>').text('Click para leer más').wrapInner($('<a></a>').attr('href', noticia.Link));
            const liFecha = $('<li></li>').text('Fecha: ' + noticia.pubDate);
            ul.append(liLeerMas, liFecha);
            li.append(titulo, ul);
            noticiasLista.append(li);
        }
        noticiasCargadas += noticiasPorPagina;
    }

    // Cargar las primeras noticias al cargar la página
    $('#btnMostrarMas').click();
});
