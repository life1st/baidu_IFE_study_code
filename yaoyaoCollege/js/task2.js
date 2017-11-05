function verificat(node,reg) {
    return !!node.querySelector('input[type=text]').value.match(reg);
}

