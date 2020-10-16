export default {
    formatCurrency: function(num) {
        return '$' + Number(num.toFixed(3)).toLocaleString() + ' '
    }
}
