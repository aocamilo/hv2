const URL= "../rutas.json"

export default function getCursos(){
	return fetch(URL)
		.then(res => res.json())
		.then(json => json.cursos.curso)
}