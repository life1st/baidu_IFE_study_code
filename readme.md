# baidu_IFE_study_code

这个仓库存放的是[百度前端学院](http://ife.baidu.com/course/all)的课程代码。

虽然现在并没有开班，但是课程任务是可以访问的，最近实习感觉自己基础不够牢靠，尽管业务需求都可以实现，但我觉得是因为我司目前的技术要求决定的。所以想要回过头来，查漏补缺。

## Demos

以下是课程的访问链接：

### 小薇学院

[任务一：零基础HTML编码](https://life1st.github.io/baidu_IFE_study_code/xiaovCollege/task1.html) [任务页](http://ife.baidu.com/course/detail/id/90)

[任务二：零基础HTML及CSS编码（一）](https://life1st.github.io/baidu_IFE_study_code/xiaovCollege/task2.html) [任务页](http://ife.baidu.com/course/detail/id/92)

[任务三：三栏式布局](https://life1st.github.io/baidu_IFE_study_code/xiaovCollege/task3.html) [任务页](http://ife.baidu.com/course/detail/id/94)

> 需要将左右两边的盒子写在中间自定义宽度的前面，否则未设置浮动的盒子会占满一行，造成之后的浮动元素位置被挤到下一行中。

[任务四：定位和居中问题](https://life1st.github.io/baidu_IFE_study_code/xiaovCollege/task4.html) [任务页](http://ife.baidu.com/course/detail/id/95)

[任务五：零基础HTML及CSS编码（二）](https://life1st.github.io/baidu_IFE_study_code/xiaovCollege/task5.html) [任务页](http://ife.baidu.com/course/detail/id/96)

[任务六：通过HTML及CSS模拟报纸排版](https://life1st.github.io/baidu_IFE_study_code/xiaovCollege/task6.html) [任务页](http://ife.baidu.com/course/detail/id/99)

[任务七：实现常见的技术产品官网的页面架构及样式布局](https://life1st.github.io/baidu_IFE_study_code/xiaovCollege/task7.html) [任务页](http://ife.baidu.com/course/detail/id/102)

> 任务七的样式多的一批，写了大概五分之三实在受不了了，主要是重复的类名，非常烦人。所以后半段用{less}来写的。无缝切换，前半部分完全不用更改，直接复制到.less文件里就能用。还没写的用{less}语法来写就行了。嵌套语法很爽！不过行数貌似没怎么变少，编译后和编译前的行数其实差不多。

[任务八：响应式网格（栅格化）布局](https://life1st.github.io/baidu_IFE_study_code/xiaovCollege/task8.html) [任务页](http://ife.baidu.com/course/detail/id/104)

> 这个布局实现得有缺陷，每一个内容块的高度都是固定的，同一行里，无法随着最高的元素自适应高度。另外，.row类的设置好像没什么意义，不设置row，也可以实现同样的布局。{less}写起来很舒服，抽象出的组件，可以直接用import编译，非常好。

> update 2017.10.10 .row类的意义是设置负外边距

[任务九：使用HTML/CSS实现一个复杂页面](https://life1st.github.io/baidu_IFE_study_code/xiaovCollege/task9.html) [任务页](http://ife.baidu.com/course/detail/id/113)

> 想了下，这个后面的任务确实工作量比较大...要做完一个提交一次恐怕很久都不能提交，所以每天做多少就提交多少了。

> update 2017.10.21 怎么这么多内容啊这个页面...关于页面的宽度，试了很多种方案，最后还是选定了百分比。使用前面的网格布局，内容无法分成12等份；使用flex-box，又会留下空隙，自适应宽度还不如百分比方便。

[任务十：Flexbox 布局练习](https://life1st.github.io/baidu_IFE_study_code/xiaovCollege/task10.html) [任务页](http://ife.baidu.com/course/detail/id/114)

[任务十一：移动Web页面布局实践](https://life1st.github.io/baidu_IFE_study_code/xiaovCollege/task11.html) [任务页](http://ife.baidu.com/course/detail/id/116)

[任务十二：学习CSS 3的新特性](https://life1st.github.io/baidu_IFE_study_code/xiaovCollege/task12.html) [任务页](http://ife.baidu.com/course/detail/id/117)

### 斌斌学院

[任务一：零基础JavaScript编码（一）](https://life1st.github.io/baidu_IFE_study_code/JsCollege/task1.html) [任务页](http://ife.baidu.com/course/detail/id/93)

[任务二：零基础JavaScript编码（二）](https://life1st.github.io/baidu_IFE_study_code/JsCollege/task2.html) [任务页](http://ife.baidu.com/course/detail/id/91)

[任务三：零基础JavaScript编码（三）](https://life1st.github.io/baidu_IFE_study_code/JsCollege/task3.html) [任务页](http://ife.baidu.com/course/detail/id/98)

[任务四：基础JavaScript练习（一）](https://life1st.github.io/baidu_IFE_study_code/JsCollege/task4.html) [任务页](http://ife.baidu.com/course/detail/id/103)

> 这个练习其实还有点疑惑。怎样优雅的实现点击元素更新数组的功能？前提是只从数组更新DOM，而不用DOM元素更新整个数组。目前用的绑定方法略复杂。

[任务五：基础JavaScript练习（二）](https://life1st.github.io/baidu_IFE_study_code/JsCollege/task5.html) [任务页](http://ife.baidu.com/course/detail/id/105)

> update 2017.10.18 使用临时数组保存数据，性能大提升！

> 可以说是最佳实践了！迭代了多个版本，最终确定了用二维数组保存排序中每次数组变化状态的方案。排序过程和动画过程解耦，代码结构清晰、可以灵活的控制动画间隔时间、性能更强同时动画不受排序影响。另外，对DOM的更新也采用了更加高效的方式：将子元素全部append到临时元素中，大量减少了对DOM的操作，极大的提高了性能。

> update 2017.10.21 在运行iOS 9 的iPad air 上发现无法运行，调试后发现是老旧的Safari不支持es6语法造成的，debug后在动画过程中会频繁触发gc，最终导致页面崩溃，暂时没有解决办法。

[任务六：基础JavaScript练习（三）](https://life1st.github.io/baidu_IFE_study_code/JsCollege/task6.html) [任务页](http://ife.baidu.com/course/detail/id/107)

> 基本上都是任务四的代码。做了两件事，一件是从textarea里读取字符串后，用正则把数据分割为数组，第二件是push的时候给每位加上状态即使用二维数组保存数据，一位是数据，一位是数据状态。目前分隔输入数据还有点问题，现在的正则匹配了所有非数字。

[任务七：JavaScript和树（一）](https://life1st.github.io/baidu_IFE_study_code/JsCollege/task7.html) [任务页](http://ife.baidu.com/course/detail/id/108)

>  关键点是学习二叉树遍历的思想（那么问题来了，遍历二叉树在工程上有什么应用？），三种遍历方法的区别是遍历顺序，相同点都是使用递归。动画的展现方法和排序一致，将遍历状态压入数组，然后循环。

[任务八：JavaScript和树（二）](https://life1st.github.io/baidu_IFE_study_code/JsCollege/task8.html) [任务页](http://ife.baidu.com/course/detail/id/110)

[任务九：JavaScript和树（三）](https://life1st.github.io/baidu_IFE_study_code/JsCollege/task9.html) [任务页](http://ife.baidu.com/course/detail/id/111)

### 糯米前端技术学院

[网页抓取分析服务系列之一（基础分析）](https://github.com/life1st/baidu_IFE_study_code/tree/master/nuomiCollege/node) [任务页](http://ife.baidu.com/course/detail/id/85)

> 写代码真的太有趣了！今天下班我都是蹦着走的！JS简直就是喜欢做工程的最佳选择！什么都可以做！对于简单的需求，性能也不是问题！非常棒！开心！

### ECharts & WebVR学院

#### ECharts

[ECharts NO.1 - 零基础绘制ECharts图表](https://life1st.github.io/baidu_IFE_study_code/graphCollege/echarts/task1.html) [任务页](http://ife.baidu.com/course/detail/id/42)

> 7月份实习入职的时候接触了echarts，所以也不算零基础啦，不过也只是会写配置的水平。（另外，羡辙小姐姐最棒了！

[ECharts NO.2 - 实现自定义的统计图表](https://life1st.github.io/baidu_IFE_study_code/graphCollege/echarts/task2.html) [任务页](http://ife.baidu.com/course/detail/id/45)