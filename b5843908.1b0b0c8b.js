(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),l=u(n),m=r,d=l["".concat(c,".").concat(m)]||l[m]||s[m]||o;return n?a.a.createElement(d,i(i({ref:t},b),{},{components:n})):a.a.createElement(d,i({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var b=2;b<o;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(105)),c={title:"Cheat Sheet",id:"cheatsheet",slug:"/cheatsheet/",description:"A cheat sheet for Azure ML.",keywords:["azure machine learning","aml","cheatsheet","overview"]},i={unversionedId:"cheatsheet/cheatsheet",id:"cheatsheet/cheatsheet",isDocsHomePage:!1,title:"Cheat Sheet",description:"A cheat sheet for Azure ML.",source:"@site/docs/cheatsheet/cheatsheet.md",slug:"/cheatsheet/",permalink:"/azureml-web/docs/cheatsheet/",editUrl:"https://github.com/Azure/azureml-web/tree/main/website/docs/cheatsheet/cheatsheet.md",version:"current",sidebar:"mainSidebar",next:{title:"Installation",permalink:"/azureml-web/docs/cheatsheet/installation"}},p=[{value:"Basic setup",id:"basic-setup",children:[]},{value:"Submit code",id:"submit-code",children:[]},{value:"Connect to data",id:"connect-to-data",children:[]}],b={rightToc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"basic-setup"},"Basic setup"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Connect to workspace.")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"from azureml.core import Workspace\nws = Workspace.from_config()\n")),Object(o.b)("p",null,"For more details: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"workspace"}),"Workspaces")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Connect to compute target.")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"from azureml.core import ComputeTarget\ntarget = ComputeTarget(ws, '<compute-target-name>')\n")),Object(o.b)("p",null,"For more details: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"compute-targets"}),"Compute Target")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Prepare Python environment."),Object(o.b)("br",{parentName:"p"}),"\n","You can use a ",Object(o.b)("inlineCode",{parentName:"p"},"requirements.txt")," file to define a Python environment on your compute."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"from azureml.core import Environment\nenv = Environment.from_pip_requirements('<environment-name>', '<path/to/requirements.txt>')\n")),Object(o.b)("p",null,"You can also use conda environments and docker images to prepare your environments.  "),Object(o.b)("p",null,"For more details: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"environment"}),"Environment")),Object(o.b)("h3",{id:"submit-code"},"Submit code"),Object(o.b)("p",null,"To run code in AML you need to:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Configure"),": Configuration includes specifying the code to run, the compute\ntarget to run on and the Python environment to run in."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Submit"),": Create or reuse an AML Experiment and submit the run.")),Object(o.b)("h4",{id:"scriptrunconfig-configure"},"ScriptRunConfig (Configure)"),Object(o.b)("p",null,"A typical directory may have the following structure:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"source_directory/\n    script.py    # entry point to your code\n    module1.py   # modules called by script.py     \n    ...\n")),Object(o.b)("p",null,"To run ",Object(o.b)("inlineCode",{parentName:"p"},"$ (env) python <path/to/code>/script.py [arguments]")," on a remote compute cluster ",Object(o.b)("inlineCode",{parentName:"p"},"target: ComputeTarget")," with an\nenvironment ",Object(o.b)("inlineCode",{parentName:"p"},"env: Environment")," we use the ",Object(o.b)("inlineCode",{parentName:"p"},"ScriptRunConfig")," class."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"from azureml.core import ScriptRunConfig\n\nconfig = ScriptRunConfig(\n    source_directory='<path/to/code>',  # relative paths okay\n    script='script.py',\n    compute_target=target,\n    environment=env,\n    arguments=arguments,\n)\n")),Object(o.b)("p",null,"For more details on specifying arguments: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"script-run-config#command-line-arguments"}),"Command line arguments")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"compute_target"),": If not provided the script will run on your local machine ",Object(o.b)("strong",{parentName:"li"},"TODO: does this require docker?")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"environment"),": If not provided, uses a default Python environment managed by Azure ML (azureml.core.runconfig.DEFAULT_CPU_IMAGE) ",Object(o.b)("strong",{parentName:"li"},"TODO: provide details on this image"),".")))),Object(o.b)("h4",{id:"experiment-submit"},"Experiment (Submit)"),Object(o.b)("p",null,"To submit this code, create an ",Object(o.b)("inlineCode",{parentName:"p"},"Experiment"),": a light-weight container that helps to\noraganize our submissions and keep track of code (See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"run-history"}),"Run History"),")."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"exp = Experiment(ws, '<experiment-name>')\nrun = exp.submit(config)\nprint(run.get_portal_url())\n")),Object(o.b)("p",null,"This link will take you to the Azure ML Studio where you can monitor your run."),Object(o.b)("p",null,"For more details: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"script-run-config"}),"ScriptRunConfig")),Object(o.b)("h3",{id:"connect-to-data"},"Connect to data"),Object(o.b)("p",null,"To work with data in your training scripts using your workspace ",Object(o.b)("inlineCode",{parentName:"p"},"ws")," and its default datastore:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"datastore = ws.get_default_datastore()\ndataset = Dataset.File.from_files(path=(datastore, '<path/on/datastore>'))\n")),Object(o.b)("p",null,"For more details see: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"data"}),"Data")),Object(o.b)("p",null,"Pass this to your training script as a command line argument."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"arguments=['--data', dataset.as_mount()]\n")))}u.isMDXComponent=!0}}]);