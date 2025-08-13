---
sidebar_position: 3
---

# 名词解释

## 格式规范  

| 类别| 格式名称| UUID|
| ---------- | ------------------------------------------ | ---------------------------------------- |
| 数据集格式 | ILCD format                                | a97a0155-0234-4b87-b4ce-a45da52f2a40     |
| 合规系统名称 | ILCD Data Network - compliance (non-Process) | 9ba3ac1e-6797-4cc0-afd5-1b8f7bf28c6a     |

## 人员字段区分表

示例：某公司(CompanyA)委托研究机构(Research Institute B)开展一个生命周期评估项目。研究人员团队(TeamC)负责生成数据，并由该团队成员(Person D)录入数据集信息。数据完成后，由国际环境数据库协会(IEDA)进行注册备案。最终数据的所有权归公司(CompanyA)，但只有公司内部研究小组(Group E)可以排他性访问该数据。

| 字段名称| 含义| 类型| 示例|
| :------------------------------------- | :------------------------------------------------------------------------------ | :----------- | :------------------------------------ |
| 数据集委托方（Commissioner of data set） | 数据收集工作的发起方或资助方| 建议填写，可多选 | Company A|
| 数据集生成者/建模者 （Data set generator / modeler） | 负责数据收集或创建的执行方| 建议填写，可多选 | Research Institute B, Team C|
| 数据录入人 （Data entry by）| 具体负责数据录入的人|选填，单选|Person D|
| 数据集注册机构（Registration authority） | 数据监督/注册备案机构| 选填，单选| IEDA|
| 数据集拥有者（Owner of data set）| 拥有数据的知识产权的人（可能与委托方不同）| 建议填写，单选|Company A|
| 对该数据集拥有排他性访问权的实体或个人（Entities or persons with exclusive access to this data set） | 拥有该数据集的绝对访问权的人| 选填，多选| Group E|
