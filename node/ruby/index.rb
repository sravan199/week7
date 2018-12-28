 puts ("------- array Sorting ------------")
 a=[1,4,4,1,5,56,0]
 p a
def buble_sort(array)
n=array.length
loop do
    swapped = false
    (n-1).times do |i|
        if array[i] > array[i+1]
            array[i],array[i+1]=array[i+1],array[i]
            swapped =true
        end
    end
     break if not swapped
end
array
end

puts ("------- Sorted array ------------")
p buble_sort(a)





