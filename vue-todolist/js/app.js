var store = {
	save(key,value){
		localStorage.setItem(key,JSON.stringify(value))
	},
	fetch(key){
		return JSON.parse(localStorage.getItem(key)) || []
	}
}

// var list = [
// 	{title:"吃饭",isChecked:true},
// 	{title:"睡觉",isChecked:false},
// 	{title:"打豆豆",isChecked:false}
// ]
var list = store.fetch("task")
var vm = new Vue({
	el:".main",
	data:{
		list:list,
		todo:"",
		edictorMes:"",
		beforeMes:"",
		visibility:"all"   //通过这个属性值的变化对数据进行筛选
	},
	watch:{
		// list:function(){     //监控list这个属性，当这个属性对应的值发生变化就会执行函数        浅监控
		// 	store.save("task",this.list); 
		// }
		list:{
			deep:true,          //深度监控
			handler:function(){
				store.save("task",this.list); 
			}
		}
	},
	computed:{      //计算属性
		noCheckedLength :function(){
			return this.list.filter(function(item){
				return !item.isChecked
			 }).length
		},
		filterList:function(){
			//过滤的时候有三种情况，  all,finished,unfinished
			var filter = {
				all:function(list){
				   return list;
				},
				finished:function(list){
					return list.filter(function(item){
						return item.isChecked;
					})
				},
				unfinished:function(list){
					return list.filter(function(item){
						return !item.isChecked;
					})
				}
			}
			return filter[this.visibility] ? filter[this.visibility](list) : list;
		}
	},
	methods:{
		addTodo(ev){      //添加任务
			  //事件处理函数中的this指向当前这个根实例
			  this.list.push({
				  title:this.todo,
				  isChecked:false
				});
			  this.todo = ""
		},
		deleteTode(todo){
			var index = this.list.indexOf(todo)
			this.list.splice(index,1);
		},
		edictTodo(todo){
			this.edictorMes = todo;
			this.beforeMes = todo.title;
		},
		completedTodo(){
			this.edictorMes = ""
		},
		cancelTodo(todo){
			todo.title = this.beforeMes;
			this.edictorMes = "";
			this.beforeMes = "";
		}
	},
	directives:{
		"focus":{
			update(el,binding){
				if(binding.value){
					el.focus();
				}
			}
		}
	}
});
watchHashChange();
function watchHashChange(){
	var hash = window.location.hash.slice(1);
	vm.visibility = hash;
}
window.addEventListener("hashchange",watchHashChange)