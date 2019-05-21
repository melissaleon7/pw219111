Vue.component('componente2',{
	template:
	`
	<div style='background:yellow;padding:2px;margin-bottom:20px;>
	<h2>Componente 2: {{ numero }} </h2>
	{{ nombre }}
	</div>
    `  	,
    props: ['nummero'],
    data() {
    	return{
    		nombre 'PW'
    	}
    },
    mounted(){
    	this.$emit('nombreComp2',this.nombre)
    }
})