import 'bootstrap';
import '../sass/style.scss';
import { PageList } from './PageList';
import { routes } from './routes.js'; 

let pageArgument;

const setRoute = () => {
  let path = window.location.hash.substring(1).split("/");
  pageArgument = path[1] || "";

  var pageContent = document.getElementById("pageContent");
  routes[path[0]](pageArgument);
  return true;
};

window.addEventListener("hashchange", () => setRoute());
window.addEventListener("DOMContentLoaded", () => setRoute());

let sub = document.getElementById("submit");
sub.addEventListener( "click", PageList);

