<template>
	<div class="modal-overlay">
	<div class="modal modal-content">
		<p>Estimado(a) Alumno(a):   Se le Solicita <strong> Responder la Encuesta Docente</strong> </p>
		<p>Esta encuesta solicita su participación en la evaluación de la docencia que se imparte en la Universidad de Magallanes, con el objetivo de recoger información desde vuestra perspectiva.</p>
		<p>Los resultados de la evaluación serán comunicados a los académicos evaluados, lo que les permitirá revisar su quehacer, en busca de un mejor desempeño en el área de la docencia.</p>
		<p>Se le solicita ingresar a la  </p>
		<a :href="`/encuesta-docente`" >
		<div class="icon text-center">
            <i :class="[' icon-gradient fa-4x','fa-solid fa-file-signature'] "></i>
			<div class="text-center">
                <p><strong>Encuesta docente</strong></p>
            </div>
        </div>
		</a>
		<br>
		<br>
		<p> <strong> El equipo de desarrollo del SID garantiza que tus respuestas son absolutamente confidenciales y que técnicamente es imposible determinar la identidad de la persona que llena una de estas encuestas.</strong> </p>
	</div>
	</div>
</template>

<script>
	export default {
}
</script>

<style>

.modal-overlay {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center; /* Add this line */
	background-color: #000000da;
}

.modal {
	/* position: center; Remove this line */
	text-align: justify;
	background-color: white;
	height: 500px;
	width: 1000px;
	/* margin-top: 10%; Remove this line */
	padding: 30px 40px;
	border-radius: 20px;
}

.icon-name{
	font-size: 14px;
	font-weight: lighter;
	font-weight: normal;
}

</style>